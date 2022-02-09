import { useState, useEffect } from 'react';
import axios from 'axios';
import authentication from '../../services/authService.js';

const Post = () => {

  const [loader,setLoader] = useState(false);
  const [message,setMessage] = useState(""); 
  const [data,setData] = useState([]);


  return (
    <>
    	<h1>Listado de Posts</h1>
        <button type="button" class="btn btn-info" onClick={()=>setData([...data,{id:"123"}])}>Agregar datos</button>
        <button type="button" class="btn btn-info" onClick={()=>console.log(data)}>Info</button>
         
    	{(data.length > 0) &&
        <table class="table">
    		<thead>
    			<tr>
    				<th>Id</th>
    				<th>Title</th>
    				<th>Action</th>
    			</tr>
    		</thead>
    		<tbody>
    			<tr>
    				<td>1</td>
    				<td>Inicio en Java</td>
    				<td>
    					<button type="button" class="btn btn-success">Editar</button>
    					<button type="button" class="btn btn-danger">Eliminar</button>
    				</td>
    			</tr>
    		</tbody>
    	</table>
        }
    </>
  )
}

export default Post;