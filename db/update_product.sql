UPDATE products set image_url=${image}, name=${name}, price=${price}
where product_id=${id};

select * from products;