
//типизурую с Products файл ,который вытаскиваю с сервера
 interface Iproduct {
    id?: number
    title: string
    price: number
    description: string
    category: string
    image:string
    rating: {
        rate: number
        count: number
    }
}
export default Iproduct;