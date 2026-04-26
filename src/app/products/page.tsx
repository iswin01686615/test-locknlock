"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Danh sách sản phẩm</h1>

            <table border={1} cellPadding={10}>
                <thead>
                <tr>
                    <th>Tên</th>
                    <th>Giá</th>
                </tr>
                </thead>

                <tbody>
                {products.map((p) => (
                    <tr key={p._id}>
                        <td>{p.name}</td>
                        <td>{p.price.toLocaleString()} VND</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}