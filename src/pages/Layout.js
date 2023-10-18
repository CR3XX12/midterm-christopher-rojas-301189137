import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
return (
<>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/blogs">Blogs</Link>
</li>
<li>
<Link to="/AddProduct">Add Product</Link>
</li>
<li>
<Link to="/SignUpUser">Sign up User</Link>
</li>
<li>
<Link to="/contact">Contact</Link>
</li>
</ul>
</nav>
<Outlet />
</>


)
};


export default Layout;
