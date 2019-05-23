import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const productDescription = [
	{
		name: "Miami Heat's Jersey",
		price: "129.90",
		imgUrl:
			"https://cdn.shopify.com/s/files/1/1368/0393/products/3-1_WADE_SWING_CITY2_FRONT_1024x1024.png?v=1539793043"
	},
	{
		name: "Miami Heat's Jersey",
		price: "79.90",
		imgUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-vOwl48zeP6jtaAGYilVAHcEAXorszetUmQjUqv0BE0NtQNxbA"
	},
	{
		name: "Warriors Jersey",
		price: "119.90",
		imgUrl:
			"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR3uXc_zg2cSuk73vXfXlUNPGblcuXVStmQEzXbj3ok7E4EIZbWweXZct9LQ4Ou99eaEML8kJgaHmd-3WRyFJfD7rzkf3C_VCp_QEoTO6wQaNeAlL5MPxNP&usqp=CAc"
	},
	{
		name: "Palmeiras Jersey",
		price: "90.00",
		imgUrl:
			"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJV8D2Dk8aagfFpGnp2SAxPym_RGNu-Fgb2BvowfKzZizzdYqrfXZYwL1Q27n2_Oym4RvoCy6hCjz6XoP3-bN1qZr-La3lWrL2n9yoHoB8Jhu8ld3cIdGsbQ&usqp=CAc"
	},
	{
		name: "USA Jersey",
		price: "116.90",
		imgUrl:
			"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRG8n7cCIH6zxULzyErCM4jtczK9M22l4HLWaCfX601wBNCjTVdpY7_l0gauJxoltPi3pq4O1gb_BWxBSIirKHZxafIcZ8vRYl0j3jcQ_LQycgw5vOsojpQ&usqp=CAc"
	},
	{
		name: "Real Madri Jersey",
		price: "109.90",
		imgUrl:
			"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTJuE6bQJF8erht6_ruqgDv1JNvhjA35Kphs1nCQYElaC8tY6krTrQLUVGiF2yWd8icgTcezNYZ5wZvhrqy-QbXWECz2iOofLOEH2NHglfEeAOKhdgn3QBH&usqp=CAc"
	},
	{
		name: "Judo Kimono Adidas",
		price: "109.90",
		imgUrl:
			"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTKLzFO4XeoVXBFLtgvzG6PxUiq_xWoVjat4Cg4xt0W02OACGeegCJep9Ipma63lqjKxhBnbAi33QoHr73PNd3awFIX8FfeGWYW7xpzTqSRwaWMp3eeBboPeA&usqp=CAc"
	},
	{
		name: "Yankees Jersey",
		price: "109.90",
		imgUrl:
			"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmSwsMHimNYPa_3eaey5WojmxmbImUBRWRznxtH36cDUWHb8koriED4mYgZoKyPczwwGlBxzvHeBxsFV9Qz3wDAU5ouvVzbY4rYMpwjPMm0Na8gvfqSGuz6w&usqp=CAc"
	},
	{
		name: "TRX Full Body Workout Bundle",
		price: "119.90",
		imgUrl:
			"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwFm1OOj2B7j0zbM2qsCdi43pPc0HtHU_Xv9qCODe1YLTQ_0VfDGNKGEhwj-AwZ4-eFIA-RCnX7hfAgfNeYuj82YtkMPeHITYO52bnRmvGHMQHHnKhOBvHxw&usqp=CAc"
	},
	{
		name: "Sub-Wings",
		price: "249.99",
		imgUrl:
			"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpKgHXwzlHloevd46hsDdJyVGRf2xffvzvkv7o2aWv0CalUmSiHI3EjEvBGu-Mk0kqrDjFou3NVMEQtNIQou-_NIGDowBm03gYbxFn3srJp9yYpfkJKMIw1g&usqp=CAc"
	},
	{
		name: "Century Bag Punch",
		price: "109.90",
		imgUrl:
			"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTYAKSlCsGUEPO_dA7i5HncY4py2kjdrhh9I3f9A6VCiM3R5O8_kvhLAfnyvNqra1fLB2Yq4fW7EW6VNLC86H3V78P36FSTINh1TgZGTkwSjUu82pZAIdRQ&usqp=CAc"
	},
	{
		name: "Miami Heat's Jersey",
		price: "29.90",
		imgUrl:
			"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTiSBCVs7dOxps-U22SicWSIFgWrPwG_e1-i2huLuAnnv--PzRXziqCdk9cgcMXPnKqdC6s52SHmtszxL6-iW4LmMdweXjQHZMQdg0O9DBg1A7pgprXWTlQ&usqp=CAc"
	}
];
//create your first component
export default class Cards extends React.Component {
	render() {
		return productDescription.map((item, index) => {
			return (
				<div key={index} className="col-md-4-mb-2 m-4">
					<div className="card">
						<img
							src="https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com1 C/O https://placeholder.com/"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card Title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">
								Last updated 1 mins ago
							</small>
						</div>
					</div>
				</div>
			);
		});
	}
}
