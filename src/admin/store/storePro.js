import {observe, action, computed, observable} from "mobx";
import axios from "axios";

class StorePro{
    // 数据列表存储
    @observable datas = [];
    // 输入框内容存储
    @observable input = {
        picture : [],
        items : "",

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
    @action addPicture(e){
        if (e.file.response === "OK") {
            this.input.picture.push(e.file.name);
            console.log(e.file.name)
        }
    }
    @action handleInputBoxInput(key,value){
        this.input[key] = value;
        // console.log(this.input[key])
    }
    @action insertOne=()=>{
        // console.log(this.input);
        axios.post("admin/proInsert",this.input).then((res)=>{
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
}

export default new StorePro();

// {
//     uid: -1,
//     name: 'xxx.png',
//     status: 'done',
//     url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
//     thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
// }