import { People } from "@/data/people";
import { useEffect } from "react";
import { addPeople } from "@/redux/slices";
import { useDispatch } from "react-redux";
import { PeopleTable } from "./components";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  });

  return <PeopleTable />;
};

export default Home;
