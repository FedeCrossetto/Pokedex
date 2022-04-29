import React, { useState, useEffect } from "react";

export const UseFetch = (url) => {
  const [result, setResult] = useState({ loading: true, data: null });

  useEffect(() => {
    getDatos(url);
  }, [url]);

  async function getDatos(url) {
    try {
      setResult({ loading: true, data: null });
      const resp = await fetch(url);
      const data = await resp.json();
      setResult({ loading: false, data });
    } catch (e) {
      console.log(e);
    }
  }

  return result;
};
