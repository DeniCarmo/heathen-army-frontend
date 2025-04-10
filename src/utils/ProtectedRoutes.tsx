import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchUser } from "../store/userSlice";

export const ProtectedRoutes = () => {
  const dispatch = useAppDispatch();
  const {role, loading, error} = useAppSelector(state => state.user);


  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  if (error || !role.length || (role.length && role !== 'admin')) return <Navigate to="/auth/login" />
  
  return <Outlet />;
}