import {observable,action,computed} from "mobx";
import axios from 'axios';

class StoreLogin {
    @observable loginInputBox = {
        inputName: '',
        inputPassword: '',
        power_id: '管理员',
    };
    @action
    loginInputBoxInput=(key,value)=>{
        this.loginInputBox[key]=value;
    };
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
    isAdmin = (nextState, replaceState,cd) =>{
        axios.get('/admin/checkLogin')
            .then((res)=>{
                console.log(res.data.isLogined);
                if (!res.data.isLogined){
                    replaceState({ pathname: '/login' });
                    cd();
                }
                else{
                    cd();
                }
            })
    };
    handleLoginOut=()=>{
        axios.get('/admin/LoginOut')
            .then((res)=>{
                if (res.status === 200){
                    alert("注销成功");
                    window.location.hash = "#/";
                }
                else {
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}
export default new StoreLogin();


