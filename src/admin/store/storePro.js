import {observe, action, computed, observable} from "mobx";
import axios from "axios";
import methods from "../function/method";


class StorePro{
    constructor(){
        this.getProdata();
    }
    // 数据列表存储
    @observable datas = [];
    // 输入框内容存储
    @observable InputBox = {
        _id:"",
        picture : [],
        item : "",

        Advisor: "",
        ProgramLeader: "",
        ProgramMembers: "",

        PaperLink:"",
        PDFLink:"",
        PosterLink:"",
        VideoLink:"",
    };
    @observable Updata = {
        action: './admin/uploadImage',
        listType: 'picture-card',
        defaultFileList: []
    };
    @action setInput = (item) =>{
        this.InputBox = methods.deepClone(item);
    };
    @action addPicture(e){
        if (e.file.response === "OK") {
            this.InputBox.picture.push(e.file.name);
            console.log(e.file.name)
        }
    }
    @action handleInputBoxInput(key,value){
        this.InputBox[key] = value;
        // console.log(this.InputBox[key])
    }
    @action insertOne=()=>{
        // console.log(this.input);
        axios.post("admin/proInsert",this.InputBox).then((res)=>{
            if(res.status === 200){
                alert("提交成功！")
            }
            else{
                console.log("提交失败！")
            }
        }).catch((err)=>{
            console.log(err);
        })
    };
    @action getProdata=()=>{
            axios.get('admin/getProdata')
                .then((res)=>{
                if (res.status === 200){
                    res.data.map((item)=>{
                        this.datas.push(item);
                    })
                }
                else{
                    console.log("error");
                }
            })
    };
    handleDelete= ()=>{
      axios.post('admin/proDeleOne',this.InputBox)
          .then((res)=>{
              if (res.status === 200){
                  alert("删除成功！！")
              }
          })
    }
}

export default new StorePro();

// {
//     uid: -1,
//     name: 'xxx.png',
//     status: 'done',
//     url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
//     thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
// }