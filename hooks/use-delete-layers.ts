import { useSelf, useMutation } from '@/liveblocks.config';

export const useDeleteLayers = () => {
  const selection = useSelf((me) => me.presence.selection);

  return useMutation(
    ({ storage, setMyPresence }) => {
      const liveLayers = storage.get('layers');
      const liveLayersIds = storage.get('layerIds');

      for (const id of selection) {
        liveLayers.delete(id);
        const idx = liveLayersIds.indexOf(id);

        if (idx !== -1) liveLayersIds.delete(idx);
      }
      setMyPresence({ selection: [] }, { addToHistory: true });
    },
    [selection]
  );
};
