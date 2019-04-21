import {
    observable,
    action,
    computed,
    configure,
} from 'mobx'
import axios from 'axios'//发送ajax 请求
import methods from '../function/method'
configure({ enforceActions: "observed" });
const moment = require('moment');

class StoreOrder {
    constructor() {
        this.getOrders("ing");
        this.getPrice();
        this.getSaler();
    }

    @observable orders = [];
    @observable InputBox = {
        _id:"",
        time:"",
        orderNum: "",
        platform: "",
        payWay: "",//票价
        deposite: "",//押金
        adultNum: "",
        childNum: "",
        totalMoney: "",
        isReback: "",
        ifFinish: "",
        saler:""
    };

    @observable price = {
        _id:"",
        adultPrice: 80,
        childPrice: 40,
        plupPrice: 50,
        clothPrice: 30
    };

    @observable activeClass = "ing";

    @observable show = true;

    @observable saler = "";

    @observable filterStr = "all";
    @observable filterTime = [];
    @observable filterplat = "各平台";
    @observable modal1Visible = false;


    @computed get ordersLength(){
        return this.orders.length;
    }

    @action
    handleInputBoxInput(key,value){
        this.InputBox[key]=value;
        this.InputBox.totalMoney =
        Number(this.InputBox.adultNum)*Number(this.price.adultPrice)
        + Number(this.InputBox.childNum)*Number(this.price.childPrice)
        + (Number(this.InputBox.adultNum)+Number(this.InputBox.childNum))*Number(this.price.clothPrice)
        + Number(this.InputBox.adultNum)*Number(this.price.plupPrice)
    };

    @action
    addOneOrders=(item)=>{
        this.orders.push(item)
    };

    @action
    setOrders=(data)=>{
        this.orders = [];
        data.map((item)=>{
            item.key = new Date() + Math.random();
            this.addOneOrders(item);
            return item.id
        })
    };
    @action
    getOrders=(e)=>{
        this.activeClass = e;
        let router = '/admin/Data?name=' + e.toLocaleLowerCase();
        axios.get(router)
            .then((res)=>{
                if (res.status === 200){
                    this.setOrders(res.data)
                }
                else {
                    console.log("error")
                }
            })
            .catch( (error)=>{
                console.log(error);
            });
    };
    @action
    getPrice=()=>{
        axios.get( '/admin/price')
            .then((res)=>{
                if (res.status === 200){
                    res.data.map((item)=>{
                        this.price = item;
                        return item.id
                    })
                }
                else {
                    console.log("error")
                }
            })
            .catch( (error)=>{
                console.log(error);
            });
    };

    @action
    setSaler=(value)=>{
        this.saler=value;
    };

    @action
    getSaler=()=>{
        axios.get( '/admin/getSaler')
            .then((res)=>{
                if (res.status === 200){
                    this.setSaler(res.data.username);
                }
                else {
                    console.log("error")
                }
            })
            .catch( (error)=>{
                console.log(error);
            });
    };

    @action
    setInput=(value)=>{
        this.InputBox = methods.deepClone(value);
        this.show = true;
    };

    @action
    initInput=()=>{
        for(var i in this.InputBox) {
                this.InputBox[i] = 0;
        }
        this.InputBox._id = "";
        this.InputBox.isReback = "no";
        this.InputBox.ifFinish = "ing";
        this.InputBox.saler = this.saler;
    };

    inputUpdate = () =>{
        let router;
        if (this.InputBox._id === ""){
            console.log(this.InputBox);
            router = '/admin/insertoneOrder';
        }
        else{
            console.log("this.InputBox");
            router = '/admin/updateoneOrder'
        }
        axios.post(router,this.InputBox)
            .then((res)=>{
                if (res.status === 200){
                    alert("提交成功")
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("提交失败")
            });
        this.reLode()
    };
    handleDelete=()=>{
        axios.post('/admin/deleteOne',this.InputBox)
            .then((res)=>{
                if (res.status === 200){
                    alert("删除成功")
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        this.reLode()
    };
    handleLoginOut=()=>{
        axios.get('/admin/LoginOut')
            .then((res)=>{
                if (res.status === 200){
                    alert("注销成功");
                    window.location.hash = "#/"
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    reLode=()=>{
        let e = "all";
        this.getOrders(e)
    };
    getClassName=(e)=>{
        if(this.activeClass === e){
            return " linkActive"
        }
        else {
            return ""
        }
    };
    fiter=()=>{
        let newOrder = [];
        var getIn = true;
        //完成度筛选
        this.orders.map((item)=>{
            if (this.filterStr !== "all" && item.ifFinish !== this.filterStr){
                getIn = false;
            }

            if (this.filterTime.length !== 0
                &&!moment(this.filterTime[0]).isSame(item.time, 'day')
                &&!moment(this.filterTime[1]).isSame(item.time, 'day')
                &&!moment(item.time).isBetween(this.filterTime[0].format('YYYY-MM-DD'),this.filterTime[1].format('YYYY-MM-DD')))
            {
                getIn = false;
            }

            if ( this.filterplat !== "各平台" && item.platform !== this.filterplat) {
                getIn = false;
            }

            if (getIn) {
                newOrder.push(item);
            }
            getIn = true;
        });
        return newOrder
    };

    @action
    setFilishFilter=(key)=>{
        this.filterStr = key;
    };
    @action
    setTimefilter=(dates)=>{
        this.filterTime = dates;
    };
    @action
    setPlatFilter=(values)=>{
        this.filterplat = values;
    };
    @action
    setModal1Visible=(values)=>{
        this.modal1Visible = values;
    }
}
export default new StoreOrder();
