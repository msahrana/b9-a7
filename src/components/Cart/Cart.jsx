const Cart = () => {
  return (
    <div className="w-3/7 border-2 border-gray-100 rounded-xl p-5 h-fit">
      <h1 className="text-xl font-bold">Want to cook: 01</h1>
      <div></div>
      <h1 className="text-xl font-bold">Want to cook: 01</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* table head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* table row*/}
              <tr>
                {/* <th>{index + 1}</th> */}
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex gap-5">
        <p>Total Time: </p>
        <p>Total Calories: </p>
      </div>
    </div>
  );
};

export default Cart;
