import {deleteBrandById, findByPage,batchByIdList,saveBrand,selectById,updateBrandById,uploadImg} from "@/api/brand";
import pickerOptions from "@/utils/date";
import base64 from "@/utils/base64";

export default {
    data() {
        return {
            pickerOptions:pickerOptions,
            value2: [],
            tableData: [],
            total: 0,
            searchParams: {
                currentPage:1,
                pageSize:5,
                brandName:"",
                startTime:"",
                endTime:""
            },
            id:0,
            idList:[],
            dialogVisible: false,//默认对话框不展示
            formData:{},
            imageUrl:""
        }
    },
    methods: {
        selectByPage(){
            console.log("******");
            findByPage(this.searchParams).then(response=>{
                console.log(response);
                console.log(response.total);
                console.log(response.dataList);
                this.total=response.total;
                this.tableData=response.dataList;

                if(this.total>0&&this.tableData.length==0){
                    this.searchParams.currentPage=this.searchParams.currentPage-1;
                    this.selectByPage();
                }
            });
        },
        currentChange(currentPage){
            console.log(currentPage);
            this.searchParams.currentPage=currentPage;
            this.selectByPage();
        },
        chooseTime() {
            this.searchParams.startTime = this.value2[0];
            this.searchParams.endTime = this.value2[1];
        },
        resetForm() {
            //  重置查询条件
            this.searchParams = {currentPage: 1, pageSize: 5};
            this.value2=[];
        },
        deleteById(){
            deleteBrandById(this.id).then(response=>{
                console.log(response);
            });
            this.selectByPage();
        },
        selectionChange(brandList){
            console.log(brandList);
            //获取idList的方式一 要清空重复id
            /*this.idList=[];
            brandList.forEach(brand=>{
                this.idList.push(brand.id);
            })*/
            //获取idList的方式二
           this.idList=brandList.map(brand=>brand.id);

           if(this.idList.length==1){
                this.id=this.idList[0];
           }else{
               this.id=0;
           }
        },
        deleteByIds(){
            this.$confirm('此操作将永久删除'+this.idList.length+'条记录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
            }).then(() => {
                this.deleteBatchByIdList();
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        async deleteBatchByIdList(){
            await batchByIdList(this.idList);
            this.selectByPage();
        },
      /*  async getBase64Str(e){
            console.log(e);
            //e.file就是上传的图片大对象
            /!*let fileReader = new FileReader();
            fileReader.readAsDataURL(e.file);
            fileReader.onload= e =>{
                //e也是一个大对象，包含了e.file转成的base64格式字符串
                console.log(e);
                this.imageUrl=e.target.result;
                this.formData.brandLogo=e.target.result;
            }*!/
            let response=await base64.getBase64Str(e.file);
            this.imageUrl=response;
            this.formData.brandLogo=response;
        },*/
        async getBase64Str(e){
            await this.upload(e.file);
        },
        async upload(file){
            let formData= new FormData();
            formData.append('part',file);
            let res= await uploadImg(formData);
            this.imageUrl=res;
            this.formData.brandLogo=res;
        },
        async insertBrand(){
            await saveBrand(this.formData);
            this.selectByPage();
        },
        async findById(){
          let brand = await selectById(this.id);
          this.formData = brand;
          this.imageUrl=brand.brandLogo;
        },
        async saveOrUpdateBrand(){
            if(this.formData.id){
                await this.updateById(this.formData);
            }else{
                await this.insertBrand(this.formData);
            }
        },
        async updateById(){
            await updateBrandById(this.formData);
            this.selectByPage();
        }
    },
    created() {
        this.selectByPage();
    }
}