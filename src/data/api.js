import { get, post } from "./axios"


//菜单目录
//[{id: "1",name: "笔记",subMenu: [{ id: "1-1", name: "笔记1" },{ id: "1-2", name: "笔记2" }]},{id: "2",name: "废纸篓"},{id: "3",name: "欢迎"}],
export const getMenu = (param) => get("/queryCatalogue", param)
//添加新目录
export const saveMenu = (param) => post("/saveCatalogue", param)
//更新目录
export const updateMenu = (param) => post("/updateCatalogue", param)
//删除目录
export const deleteMenu = (param) => get("/deleteCatalogue", { params: { ...param } })


//目录下包括子目录笔记
export const getNotePaperByAll = (param) => get("/queryList", { params: { ...param } })
//某个子目录下的笔记
export const getNotePaperById = (param) => get("/queryListById", { params: { ...param } })
//模糊搜索所有目录下的笔记
export const getNotePaperByLike = (param) => get("/queryListByContentLike", { params: { ...param } })
//保存笔记
export const saveNotePaper = async (param) => { await post("/saveNoteList", param) }
//更新笔记
export const updateNotePaper = async (param) => { await post("/updateNodeList", param) }
//更新是否为置顶
export const updateTop = (param) => post("/updateTop", param)
//删除
export const deleteNotePaper = (param) => get("/deleteNodeList", { params: { ...param } })