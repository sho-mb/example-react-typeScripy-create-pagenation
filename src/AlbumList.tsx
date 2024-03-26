import React from 'react'
import "./AlbumList.css";
import Album from './type';

type Props = {
  albums: Album[];
  currentAlbums: Album[];
};

const AlbumList = (props : Props) => {
  const { currentAlbums } = props;
  return <div className='albumGridWrapper'>
    {currentAlbums.map((album) => (
      <div key={album.id}>
        <img src={album.url} />
      </div>
    ))}
  </div>
};

export default AlbumList;