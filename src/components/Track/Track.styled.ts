import styled from 'styled-components';

export const TrackWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 230px;
  height: auto;
  margin: 12px 10px;
  padding: 10px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(153, 153, 153, 0.1);
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 10px 5px;
    width: 180px;
  }

  @media (max-width: 390px) {
    width: 160px;
    margin: 0px;
  }
`;

export const TrackImage = styled.img`
  width: 100%;
  height: 95px;
  object-fit: cover;
  border-radius: 12px;
`;

export const TrackInfoRow = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TrackText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

export const TrackTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #6b6b6b;
  margin: 0 0 4px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TrackAuthor = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  color: #6b6b6b;
  margin: 0;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const IconLike = styled.div`
  margin-left: 8px;
  cursor: pointer;
  flex-shrink: 0;
`;
export const MusicIconWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: 50px;
`;
