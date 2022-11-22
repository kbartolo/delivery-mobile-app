import { useEffect, useState } from "react";
import sanityClient from "@helpers/sanity";

type Response<T> = {
  loading: boolean;
  error?: Error | undefined;
  data?: T;
};

const sanityFn = <T>(url: string, options?: T): Promise<void> => {
  return sanityClient.fetch(url);
};

const fetchFn = async (url: string, controller: AbortController | undefined, options?: RequestInit) => {
  const request = await fetch(url, {
    ...options,
    signal: controller?.signal,
  });
  return await request.json();
};

export const useFetch = <T>(dependencyType: string, url: string, options?: RequestInit | T): Response<T> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | undefined>();
  const [data, setData] = useState<T | undefined>();

  const getInfo = async (controller?: AbortController) => {
    try {
      const response =
        dependencyType === "fetch" ? await fetchFn(url, controller, options) : await sanityFn(url, options);
      setLoading(false);
      setData(response);
    } catch (err) {
      if (err instanceof Error) setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (dependencyType === "fetch") {
      const controller = new AbortController();
      getInfo(controller);
      return () => {
        controller.abort();
      };
    } else {
      getInfo();
      return () => {
        getInfo();
      };
    }
  }, []);

  return {
    loading,
    error,
    data,
  };
};
