import React from 'react';
import {Outlet} from 'react-router';
import './LayoutAdmin.css';

const LayoutAdmin = () => {
	
  return (
  	<div className="container-fluid">
  		<div className="row">
	    	<div className="col-2 p-0 sidebar vh-100">
	    		<div className="px-2 py-4">
	    			<img className="img-fluid py-2" src="https://fullentretenimiento.com/assetsInicio/img/black-logo.png" alt="logo2"/>
	    		</div>
				<ul class="nav flex-column text-center">
					<li class="nav-item">
						<a class="nav-link item-color" href="#">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link item-color" href="#">Perfil</a>
					</li>
					<li class="nav-item">
						<a class="nav-link item-color" href="#">Post</a>
					</li>
					<li class="nav-item">
						<a class="nav-link item-color" href="#">Cerrar sesion</a>
					</li>
				</ul>	
	    	</div>
	    	<div className="col-10 px-0 bg-light">
	    		<div className="d-flex py-2 px-4 border bg-white">
	    			<div className="">
	    				<h1 className="fs-5">Titulo</h1>
	    			</div>
	    			<div className="ms-auto">
	    				<img className="profile-img rounded-circle" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" 
	    				alt="profile-img"/>
	    			</div>
	    		</div>	

	    		<div className="p-3">
	    			<Outlet/>
	    		</div>
	    	</div>
	    </div>
  	</div>
    
  )
}

export default LayoutAdmin;