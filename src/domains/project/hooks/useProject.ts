import { useMemo } from "react";
import { useProjectSettingsQuery } from "../../api";

export const useProject = () => {
  const {
    data: settings,
    isFetching,
    isLoading,
  } = useProjectSettingsQuery(
    {},
    {
      skip: false,
    }
  );

  const coordinates = useMemo(() => {
    if (!settings) return undefined;
    return {
      latitude: settings.location?.latitude,
      longitude: settings.location?.longitude,
    };
  }, [settings]);
  const data = {
    settings,
    coordinates,
  };

  return data;
};
