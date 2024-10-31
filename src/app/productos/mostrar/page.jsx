import Link from "next/link";
import Boton from "@/components/boton";
import axios from "axios";
import '../../estilos.css';
import BorrarProducto from "@/components/borrarProducto";
import EditarProducto from "@/components/editarProducto";

async function getProductos() {
    const url = "http://localhost:3000/productos";
    const productos = await axios.get(url);
    return productos.data;
}

export default async function Productos() {
    const productos = await getProductos();

    return (
        <div className="container"> 
            <h1 className="titulo">Productos</h1> 
            <p className="descripcion">Estas en productos</p> 
            <table className="table"> 
                <thead>
                    <tr>
                        <th className="table-header">Id</th> 
                        <th className="table-header">Producto</th>
                        <th className="table-header">Precio</th>
                        <th className="table-header">Cantidad</th>
                        <th className="table-header">Editar / Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, i) => (
                        <tr key={i}>
                            <td className="table-data">{i + 1}</td>
                            <td className="table-data">{producto.nombre}</td>
                            <td className="table-data">${producto.precio}</td>
                            <td className="table-data">{producto.cantidad}</td>
                            <td className="table-data">
                                <EditarProducto id={producto.id} /> / <BorrarProducto id={producto.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link href="/productos/nuevo" className="link">Agregar Producto</Link>
        </div>
    );
}
