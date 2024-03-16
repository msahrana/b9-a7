const Cart = ({carts, handlePreparing, prepare}) => {
  return (
    <div className="w-3/7 border-2 border-gray-100 rounded-xl p-5 h-fit">
      <h1 id="before-cook" className="text-xl font-bold">
        Want to Cook: {carts.length}
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* table head */}
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            {/* table row*/}
            <tbody>
              {carts.map((items, index) => (
                <tr className="flex justify-between mt-3" key={index}>
                  <td>{index + 1}</td>
                  <td>{items.recipe_name}</td>
                  <td>{items.preparing_time}</td>
                  <td>{items.calories}</td>
                  <button
                    onClick={() => handlePreparing(items)}
                    className="btn btn-sm bg-[#0be58a] font-semibold rounded-full border-none"
                  >
                    Preparing
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h1 id="after-cook" className="text-xl font-bold">
        Currently Cooking: {prepare.length}
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* table head */}
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            {/* table row*/}
            <tbody>
              {prepare.map((its, index) => (
                <tr className="flex justify-between mt-3" key={index}>
                  <th>{index + 1}</th>
                  <td>{its.recipe_name}</td>
                  <td>{its.preparing_time}</td>
                  <td>{its.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex gap-5">
        <p className="font-semibold">
          Total Time= {prepare.reduce((p, c) => p + c.preparing_time, 0)}
        </p>
        <p className="font-semibold">
          Total Calories= {prepare.reduce((p, c) => p + c.calories, 0)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
