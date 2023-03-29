import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarDays, faRightLong} from "@fortawesome/free-solid-svg-icons";

const SingleData = (props) => {
  console.log(props.singleData);
  const { image, name, features, description, published_in } = props.singleData;
  return (
    <div>
      <div className="card card-compact w-full  shadow-2xl">
        <figure>
          <img className="w-full" src={image} />
        </figure>
        <div className="card-body">
          <h1 className=" text-3xl card-title">Feature</h1>
          {features.map((feature, index) => (
            <p>
              {index + 1}. {feature}
            </p>
          ))}
          <hr className="border-2 border-info" />
          <p>{description ? description : "NO Description found!!!"}</p>
          <div className="flex justify-between">
            <div>
              <h2 className="card-title">{name}</h2>
              <p><FontAwesomeIcon icon={faCalendarDays} /> {published_in}</p>
            </div>
            <div>
              <div className="card-actions justify-end">
                <button className="btn bg-blue-400 hover:bg-blue-700 rounded-full"><FontAwesomeIcon icon={faRightLong} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
<h2>Hello ovi</h2>;
