import { useState } from 'react';
import { useMutation } from 'convex/react';

export const useApiMutation = (mutationFunc: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunc);

  const mutate = async (args: any) => {
    setPending(true);
    return apiMutation(args)
      .finally(() => setPending(false))
      .then((res: any) => res)
      .catch((err: any) => {
        throw err;
      });
  };

  return { mutate, pending };
};
