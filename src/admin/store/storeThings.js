import { observable,action } from "mobx";
import axios from 'axios';
// import {Form} from 'antd'
class StoreLogin {
    constructor() {
        this.getPrice();
    }

    @observable data = [];
    @observable editingKey = "";

    @action
    getPrice=()=>{
        let box2 = [];
        axios.get("/admin/price").then((result) => {
            let abox = result.data[0];
            let index = 0;
            for (let key in abox) {
                if (key === "_id") {
                    continue;
                }
                let box = {};
                box.name = key;
                box.price = abox[key];
                box.key = index++;
                box2.push(box);
            }
            this.data.replace(box2);
        });
    };

    save = (form, key) =>{
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            // const newData = [...this.state.data];
            const newData = this.data;
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ data: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ data: newData, editingKey: '' });
            }
        });
        let box = {};
        this.data.map(function (item) {
            box[item.name] = item.price;
            return item._id;
        });
        axios.post('/admin/setprice',box)
            .then((res)=>{
                if (res.status === 200){
                    alert("修改成功");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // --------------------set------------------//
    @action
    setData=(data)=>{
        this.data.replace(data)
    };

    @action
    edit(key) {
        this.editingKey = key;
        console.log(this.editingKey);
    }

    @action
    cancel = () => {
        this.editingKey = "";
    };

    // ---------------无需监控函数---------------//

    isEditing = (record) =>{
        // console.log(record.key === this.editingKey);
        return record.key === this.editingKey;
    };

}
export default new StoreLogin()
