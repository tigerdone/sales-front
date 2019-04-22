import {action, computed, configure, observable,} from 'mobx'
import axios from 'axios' //发送ajax 请求
import {deepClone} from "../function/method.js"

configure({ enforceActions: "observed" });
const moment = require('moment');
// import methods from "../function/method";

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
    @observable modalInputBox = false;
    @observable deleModal = false;
    @observable filterNum = 0;

    //filter
    @observable filterStr = "all";
    @observable filterTime = [];
    @observable filterplat = "各平台";
    @observable inputSearch = "";

    @computed get ordersLength(){
        return this.orders.length;
    };
    @action
    handleInputBoxInput=(key,value)=>{
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
        let box = [];
        data.map((item)=>{
            item.key = new Date() + Math.random();
            item.personNum = parseInt(item.childNum) + parseInt(item.adultNum);
            box.push(item);
            // console.log("sdfsdfsdfsdf");
            return item.id
        });
        this.orders.replace(box)
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
                        this.setPrice(item);
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
    setmodalInputBox=(values)=>{
        // this.initInput();
        this.modalInputBox = values;
    };
    @action
    newOrder=()=>{
        this.initInput();
        this.setmodalInputBox(true);
    };
    @action
    setDeleModal=(values)=>{
        this.deleModal = values;
    };
    @action
    setPrice=(item)=>{
        this.price = item;
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
    initInput=()=>{
        for(let i in this.InputBox) {
                this.InputBox[i] = 0;
        }
        this.InputBox._id = "";
        this.InputBox.isReback = "false";
        this.InputBox.ifFinish = "ing";
        this.InputBox.saler = this.saler;
        this.InputBox.platform = "现场";
        this.InputBox.payWay = "现金";
        this.InputBox.deposite = "现金";
    };
    @action
    updateInput=(record,tag)=>{
        this.InputBox =  deepClone(record);
        if (tag === "repaire") {
            this.modalInputBox = true;
        }
        else if(tag === "delete"){
            this.deleModal = true;
        }
    };
    @action
    setIsReback=(e)=>{
        this.InputBox.isReback = e.target.checked?"true":"false";
        this.InputBox.ifFinish = e.target.checked?"ed":"ing";
    };
    @action
    setFilter=(value)=>{
        this.filterNum = value;
    };



    //数据交互
    inputUpdate=() =>{
        let router;
        if (this.InputBox._id === ""){
            // console.log(this.InputBox);
            router = '/admin/insertoneOrder';
        }
        else{
            // console.log("this.InputBox");
            router = '/admin/updateoneOrder';
        }
        axios.post(router,this.InputBox)
            .then((res)=>{
                if (res.status === 200){
                    this.setmodalInputBox(false);
                    alert("提交成功");
                    // this.getOrders(this.activeClass);
                    this.reLode()
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("提交失败")
            });
    };
    handleDelete=()=>{
        this.setDeleModal(false);
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
            let timebox = this.filterTime.slice();
            let startTime = moment(timebox[0]).format("YYYY-MM-DD");
            let endTime = moment(timebox[1]).format("YYYY-MM-DD");
            if (this.filterTime.length >= 2
                &&!moment(startTime).isSame(item.time)
                &&!moment(endTime).isSame(item.time)
                &&!moment(item.time).isBetween(startTime, endTime)
            )
            {
                getIn = false;
            }
            if ( this.filterplat !== "各平台" && item.platform !== this.filterplat) {
                getIn = false;
            }
            if (this.inputSearch !== "" && item.orderNum !== this.inputSearch){
                getIn = false;
            }
            if (getIn) {
                newOrder.push(item);
            }
            getIn = true;
            return item._id;
        });
        this.setFilter(newOrder.length);
        return newOrder
    };

    // fiter方法
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
    setInputSearch=(values)=>{
        this.inputSearch = values;
    };
    @action
    setInitFilter=()=>{
        this.filterStr = "all";
        this.filterTime = [];
        this.filterplat = "各平台";
        this.inputSearch = "";
    };
}
export default new StoreOrder();
