export interface UserDTO {
    user_id: number,
    user_email: string,
    user_role: string
}

export interface ProductDTO {
    product_brand: string, 
    product_name: string, 
    product_image: string, 
    product_description: string, 
    product_price: string | number
}