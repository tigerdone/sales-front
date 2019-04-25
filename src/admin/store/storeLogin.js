import { observable,action } from "mobx";
import axios from 'axios';

class StoreLogin {
    constructor(){
        this.message = "";
        this.isLoading = false;
    }
    @observable loginInputBox = {
        inputName: '',
        inputPassword: '',
        power_id: '管理员',
    };

    @observable message;
    @observable saler = "sadasdasdasd";
    @observable isLoading;

    @action
    loginInputBoxInput=(key,value)=>{
        this.loginInputBox[key]=value;
    };
    @action
    setIsLoading=(value)=>{
        this.isLoading=value;
    };
    @action
    setSaler=(value)=>{
        this.saler=value;
    };
    @action
    handleLogin=()=>{
        // console.log(this.loginInputBox.inputName, '提交数据');
        this.setIsLoading(true);
        axios.post('/admin/login',this.loginInputBox)
            .then((res)=>{
                if (res.data.isLogined === true){
                    this.setIsLoading(true);
                    this.setSaler(this.loginInputBox.inputName);
                    window.location.hash = "#/order";
                }
                else if (res.data.isLogined === false){
                    // console.log("error");
                    this.setMessage("密码错误");
                    this.setIsloading(false);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    @action
    setIsloading = (value) => {
        this.isLoading = value;
    };
    @action
    setMessage = (value) => {
        this.message = value;
    };


    isAdmin = (nextState, replaceState,cd) =>{
        axios.get('/admin/checkLogin')
            .then((res)=>{
                console.log("res.data.isLogined:"+res.data.isLogined);
                if (!res.data.isLogined){
                    replaceState({ pathname: '/login' });
                    cd();
                }
                else{
                    cd();
                }
            })
    };
}
export default new StoreLogin();


