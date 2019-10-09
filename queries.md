# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.productname
, c.categoryname as category
from products as p
join categories as c on p.categoryid = c.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select orderId
,s.shipperName
, orderDate 
from orders as o
join shippers as s on o.shipperId = s.shipperId
where orderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select orderid
, quantity
, p.productname
from orderdetails as o
join products as p on o.productid = p.productid
where orderid = 10251
order by p.productname

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select o.orderid as 'Order'
, c.customername as 'Customer'
, e.lastname as [Employee Last Name]
from orders as o
join customers as c on o.customerid = c.customerid
join employees as e on o.employeeid = e.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

select categoryName
, count(p.categoryId) as 'Count'
from products as p
left join categories as c on p.categoryId = c.categoryId
group by c.categoryId

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

select orderId
, count(orderId) as ItemCount
from orderDetails
group by orderId