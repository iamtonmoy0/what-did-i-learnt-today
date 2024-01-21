import React from "react";

export default function SingleProfile({ params }: any) {
  return <div className="min-h-screen text-center bg-slate-900 text-white ">Single Profile
	{params.id}
  </div>;
}
