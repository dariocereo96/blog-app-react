import React from 'react';

const CartArticle = ({el}) => {

  const {title,body,create_at,profile} = el; 

  return (
  	<>
	    <div class="card p-2">
	    	<div className="d-flex">
	    		<img src={"http://192.168.1.129/crud-laravel-api/public/"+profile.photo} class="rounded-circle" alt="profile" width="40" height="40"/>
	    		<p>{"Autor "+profile.name+" "+profile.lastname}</p>
	    	</div>
	    	<h4 class="card-title">{title}</h4>
	    	<img class="card-img-top" 
	    	src="http://definicionde.hugex.net/wp-content/uploads/2015/07/paisajes-natutrales-ecologiaverde-6-1024x576.jpg" 
	    	alt="Card image cap" width="150" height="300"  />
	    	<div class="card-body">
	    		<div dangerouslySetInnerHTML={{__html: body}}></div>
	    		<p class="card-text"><small class="text-muted">{create_at}</small></p>
	    	</div>
	    </div>
	    <br/>
	</>
  )
}

export default CartArticle;