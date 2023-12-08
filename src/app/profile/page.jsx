import React from 'react';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';

const profile = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Member");
  }

  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md profile">
      <div className="flex items-center justify-center mb-4">
        {session?.user.image && (
          <img
            src={session.user.image}
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
        )}
      </div>
      <div className="mb-4">
        <p className="text-lg">
          <strong>Email:</strong> {session?.user?.email}
        </p>
      </div>
      <div>
        <p className="text-lg">
          <strong>Role:</strong> {session?.user?.role}
        </p>
      </div>
    </div>
  );
};

export default profile;
