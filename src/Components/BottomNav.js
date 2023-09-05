import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./BottomNav.css";

function BottomNav() {
	return (
		<div className="panel">
			<div className="panel__menu">
				<MenuIcon className="panel__icon" /> All
			</div>
			<div className="panel__lists">
				<p>Medical Care & Pharmacy</p> <ArrowDropDownIcon />
				{/* <p>Back to School</p>
				<p>Off to College</p>
				<p>Prime Video</p> */}
				<p>Amazon Basics</p>
				<p>Today's Deals</p>
				<p>Buy Again</p>
				<p>prime</p> <ArrowDropDownIcon />
				{/* <p>Best Sellers</p>
				<p>Customer Service</p>
				<p>Music</p> */}
			</div>
			{/* <div className="panel__deals">Shop Black Business Month</div> */}
		</div>
	);
}

export default BottomNav;
