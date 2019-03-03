import {observable,action,computed} from "mobx";
import axios from 'axios';

class StoreLogin {
    constructor(){

        axios.get('/admin/checkLogin')
            .then((res)=>{
                this.logined = res.data.isLogined;
            });
    }
    @observable loginInputBox = {
        inputName: '',
        inputPassword: '',
        power_id: '管理员',
    };
    @action
    loginInputBoxInput=(key,value)=>{
        this.loginInputBox[key]=value;
    };
    @observable logined = false;
    handleLogin=()=>{
        console.log(this.loginInputBox.inputName, '提交数据');
        axios.post('/admin/login',this.loginInputBox)
            .then((res)=>{
                if (res.status === 200){
                    window.location.hash = "#/home";
                    this.logined = true;
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("密码错误ssdf")
            });
    };
    isAdmin = (nextState, replaceState) =>{
        this.sleep(10);
        if (this.logined){
            // replaceState({ pathname: '/login' });
        }
        else{
            console.log("跳转");
            replaceState({ pathname: '/login' });
        }
    };
    sleep = (delay)=> {
        var start = (new Date()).getTime();
        while ((new Date()).getTime() - start < delay) {

        }
    };

    @action
    loginOut= ()=>{
        this.logined = false;
    }
}
export default new StoreLogin();


