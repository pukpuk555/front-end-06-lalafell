import React from "react";

function AddressCard({
  id,
  name,
  lastName,
  tel,
  address,
  sub,
  district,
  province,
  postal,
  deleteAddress,
  editAddress,
}) {
  return (
    <div className="w-full h-[100px] rounded-xl border-[1px] border-black py-2 px-6 mb-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h4 className="text-lg font-medium">{`${name} ${lastName}`}</h4>
          <p className="text-sm">{tel}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() =>
              editAddress({
                id,
                name,
                lastName,
                tel,
                address,
                sub,
                district,
                province,
                postal,
              })
            }
          >
            Edit
          </button>
          <button onClick={() => deleteAddress(id)}>Delete</button>
        </div>
      </div>
      <div>
        <p>{address}</p>
        <p>{`${sub} ${district} ${province} ${postal}`}</p>
      </div>
    </div>
  );
}

export default AddressCard;
