import {
    observable,
    action,
    computed,
} from 'mobx'
import axios from 'axios'//发送ajax 请求
import methods from '../function/method'

class StoreOrder {
    constructor() {
        this.getPaper("Paper");
        this.getPrice();
    }
    @observable Paper = [];
    @observable InputBox = {
        _id:"",
        orderNum: "",
        platform: "sss",
        adultNum: "sss",
        childNum: "sss",
        totalMoney: "ss",
        payWay: "sss",
        isReback: "sss",
        ifFinish: "ed"
    };

    @observable price = {
        _id:"",
        "adultPrice": "80",
        "childPrice": "40",
        "plupPrice": "50",
        "clothPrice": "30"
    };

    @observable activeClass = "will";

    @observable show = true;

    @computed get PaperLength(){
        return this.Paper.length;
    }

    @action
    handleInputBoxInput(key,value){
        this.InputBox[key]=value;
    };

    @action
    addPaper(item){
        this.Paper.push(item)
    }

    @action
    getPaper=(e)=>{
        this.Paper = [];
        let router = '/admin/Data?name=' + e.toLocaleLowerCase();
        axios.get(router)
            .then((res)=>{
                if (res.status === 200){
                    res.data.map((item)=>{
                        this.addPaper(item)
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
    getPrice=()=>{
        axios.get( '/admin/price')
            .then((res)=>{
                if (res.status === 200){
                    res.data.map((item)=>{
                        this.price = item
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
    setInput=(value)=>{
        this.InputBox = methods.deepClone(value);
        this.show = true;
    };
    @action
    clearInput=()=>{
        for(var i in this.InputBox) {
                this.InputBox[i] = "";
        }
    };
    inputUpdate = () =>{
        let router;
        if (this.InputBox._id === ""){
            console.log(this.InputBox);
            router = '/admin/insertPaper'
        }
        else{
            router = '/admin/updatePaper'
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
        let e = "paper";
        if(this.Paper.length !== 0){
            if (this.Paper[0].type === "patent") {
                e = "patent";
            }
            if (this.Paper[0].type === "software_copyright") {
                e = "software_copyright";
            }
            if (this.Paper[0].type === "awards") {
                e = "awards";
            }
        }
        this.getPaper(e)
    };


    getClassName=(e)=>{
        if(this.activeClass === e){
            return " linkActive"
        }
        else {
            return ""
        }
    };
    setClassName=(e)=>{
        this.activeClass = e
    }
}
export default new StoreOrder();
