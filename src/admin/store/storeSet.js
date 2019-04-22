import { observable,action } from "mobx";
import axios from 'axios';
import {deepClone} from "../function/method";

class StoreLogin {
    constructor(){
        this.getUsers();
    }
    @observable users = [];
    @observable userBox = {
        username:"",
        password:"",
        orders:""
    };

    @observable usersModal = false;
    @observable deleModal = false;

    @action
    addUser=()=>{
        let router;
        if (this.InputBox._id === ""){
            router = '/admin/insertuser';
        }
        else{
            router = '/admin/updateuser';
        }
        axios.post(router,this.InputBox)
            .then((res)=>{
                if (res.status === 200){
                    this.userBox(false);
                    alert("提交成功");
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

    @action
    setUsersModal=(value)=>{
        this.usersModal = value;
    };
    @action
    getUsers=()=>{
        let router = '/admin/users';
        axios.get(router)
            .then((res)=>{
                if (res.status === 200){
                    this.setUsers(res.data)
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
    setUsers=(data)=>{
        let box = [];
        data.map((item)=>{
            item.key = new Date() + Math.random();
            box.push(item);
            console.log(item);
            return item.id
        });
        this.users.replace(box)
    };
    @action
    newOrder=()=>{
        this.usersModal = true;
        this.initInput();
    };
    @action
    initInput=()=>{
        this.username= "";
        this.password= "";
        this.orders= 0;
    };
    @action
    updateInput=(record,tag)=>{
        this.userBox =  deepClone(record);
        if (tag === "repaire") {
            this.usersModal = true;
        }
        else if(tag === "delete"){
            console.log("hello");
            this.deleModal = true;
        }
    };
}
export default new StoreLogin();


