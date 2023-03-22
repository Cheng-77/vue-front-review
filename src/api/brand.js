//向后台发送请求的接口，通过axios对象发送instance
//一个一个的方法->对应于后台的getMapping等

import instance from "@/utils/request";

export function findByPage(searchParams){
    return instance.get(`brand/findByPage`,
        {params:searchParams});
}

export function deleteBrandById(id){
    return instance.delete(`brand/deleteById/${id}`);
}

export function batchByIdList(idList){
    return instance.delete(`brand/deleteBatchById/${idList}`);
}

export function saveBrand(entity){
    return instance.post(`brand/insert`,entity);
}

export function selectById(id){
    return instance.get(`brand/findById/${id}`);
}

export function updateBrandById(brand){
    return instance.put(`brand/updateById`,brand);
}

export function uploadImg(file){
    return instance.post(`upload`,file);
}