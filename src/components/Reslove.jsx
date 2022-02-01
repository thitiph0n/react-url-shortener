import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Api from '../apis/axios';

const Reslove = () => {
  const navigate = useNavigate();
  const { linkId } = useParams();

  const getLink = async (linkId) => {
    try {
      const { data } = await Api.get('reslove/' + linkId);
      return data.url;
    } catch {
      return null;
    }
  };

  useEffect(async () => {
    const url = await getLink(linkId);
    console.log(url);
    if (url == null) {
      return navigate('/', { replace: true });
    }
    window.location.href = url;
  }, []);

  return <></>;
};

export default Reslove;
