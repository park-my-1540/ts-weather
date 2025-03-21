import React from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { header } from '@/styles/style.css';
import { flexRowBetween } from '@/styles/components/flexbox.css';
import { IconButton } from '@/components/atom/IconText';

interface SettingHeaderProps {
  onClose: () => void;
}

const SettingHeader: React.FC<SettingHeaderProps> = ({ onClose }) => (
  <div className={`${header} ${flexRowBetween}`}>
    <h2>Settings</h2>
    <IconButton
      icon={faClose}
      color="primary"
      fonstSize="24px"
      onClick={onClose}
    />
  </div>
);

export default SettingHeader;
