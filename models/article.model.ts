export interface ArticleModel {
    id:string,
    name: string,
    price: number,
    isCollection: boolean,
    description: string
    options: Array<{
        name: string,
        quantity: number,
    }>
}