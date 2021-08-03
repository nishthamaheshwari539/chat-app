import React from 'react';
import { Tooltip, Whisper, Badge } from 'rsuite';
import { usePresence } from '../misc/custom-hooks';

const getColor = presence => {
  if (!presence) {
    return 'gray';
  }
  switch (presence.state) // ye presence.state database se dekha
   {
    case 'online':
      return 'green';
    case 'offline':
      return 'red';
    default:
      return 'green';
  }
};

const getText = presence => {
  if (!presence) {
    return 'unknown State';
  }
  return presence.state === 'online'
    ? 'online'
    : `last online ${new Date(presence.Last_changed).toLocaleDateString}`;
};

const PresenceDot = ({ uid }) => {
  const presence = usePresence(uid);

  return (
    <Whisper
      placement="top"
      trigger="hover"
      speaker={<Tooltip> {getText(presence)}</Tooltip>}
    >
      <Badge
        className="cursor-pointer"
        style={{ backgroundColor: getColor(presence) }}
      />
    </Whisper>
  );
};

export default PresenceDot;