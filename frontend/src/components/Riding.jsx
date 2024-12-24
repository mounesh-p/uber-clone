import {Link} from 'react-router-dom';

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to={'/home'} className="fixed right-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-home-5-line"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="object-cover w-full h-full"
          src="https://th.bing.com/th/id/OIP.VJpMhXBsme4wZZpb9IgzhgHaJs?w=740&h=968&rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
      <div className="flex items-center justify-between">
        <img
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
          className="h-10"
        />
        <div>
          <h2 className="text-lg font-medium capitalize">Sarthak</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1452</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
         
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
