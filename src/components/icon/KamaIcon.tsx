import React, { HTMLAttributes, useEffect, useState } from 'react';
import classNames from 'classnames';

export type IconTypes =
  | 'archive'
  | 'arrow-down-alt'
  | 'arrow-down-square'
  | 'arrow-down'
  | 'arrow-down-to-square'
  | 'arrow-left-alt'
  | 'arrow-left-square'
  | 'arrow-left'
  | 'arrow-right-alt'
  | 'arrow-right-from-square'
  | 'arrow-right-square'
  | 'arrow-right'
  | 'arrow-right-to-square'
  | 'arrow-up-alt'
  | 'arrow-up-arrow-down'
  | 'arrow-up-from-square'
  | 'arrow-up-square'
  | 'arrow-up'
  | 'backward-12'
  | 'backward'
  | 'bag-shopping-alt'
  | 'bag-shopping'
  | 'bank-card'
  | 'bell'
  | 'bill'
  | 'bookmark-alt'
  | 'bookmark-minus'
  | 'bookmark'
  | 'briefcase'
  | 'bug-alt'
  | 'bug'
  | 'calculator'
  | 'calendar'
  | 'camera-movie'
  | 'camera'
  | 'chart' // mask
  | 'chart-column'
  | 'chart-line'
  | 'chart-pie'
  | 'check-square'
  | 'chess-knight'
  | 'chevron-down-circle'
  | 'chevron-down'
  | 'chevron-left-circle'
  | 'chevron-left'
  | 'chevron-right-circle'
  | 'chevron-right'
  | 'chevron-up-circle'
  | 'chevron-up'
  | 'clipboard'
  | 'clock-square'
  | 'clock'
  | 'close' // mask
  | 'cog-square'
  | 'cog'
  | 'column-add'
  | 'column-minus'
  | 'comment-dots'
  | 'compass'
  | 'compress'
  | 'config'
  | 'couch'
  | 'dashboard'
  | 'delete'
  | 'discount'
  | 'download' // mask
  | 'edit' // mask
  | 'envelope'
  | 'expand'
  | 'eye-alt'
  | 'eye-slash'
  | 'eye'
  | 'file-0'
  | 'file-lines'
  | 'file-minus'
  | 'file-plus'
  | 'file-xmark'
  | 'filter'
  | 'fingerprint'
  | 'flask-round-potion'
  | 'folder-minus'
  | 'forklift'
  | 'forward-10'
  | 'forward'
  | 'gamepad'
  | 'grid'
  | 'headset'
  | 'heart'
  | 'home'
  | 'image'
  | 'info' // mask
  | 'info-circle'
  | 'info-square'
  | 'key-square'
  | 'life-ring'
  | 'location-crosshairs'
  | 'location-dot'
  | 'lock-open'
  | 'lock'
  | 'medal'
  | 'memo'
  | 'microphone-lines'
  | 'microphone'
  | 'minus'
  | 'mobile'
  | 'money-bill-0'
  | 'monitor-list'
  | 'mouse'
  | 'mug-hot'
  | 'music'
  | 'newspaper'
  | 'paperclip'
  | 'pause'
  | 'pen'
  | 'pen-to-square'
  | 'phone-slash'
  | 'phone'
  | 'phone-volume'
  | 'phone-xmark'
  | 'play'
  | 'plus'
  | 'print'
  | 'question-comment'
  | 'refresh'
  | 'ribbon'
  | 'save'
  | 'scan'
  | 'search'
  | 'Send@2x'
  | 'share-nodes'
  | 'shield-check'
  | 'shield-xmark'
  | 'shopping-cart'
  | 'sidebar-collpase'
  | 'sidebar-expand'
  | 'square-0'
  | 'stamp'
  | 'star'
  | 'thumbtack'
  | 'ticket-star'
  | 'ticket'
  | 'toggle-off'
  | 'trees'
  | 'umbrella'
  | 'user-plus'
  | 'users-alt'
  | 'users'
  | 'user'
  | 'violation'
  | 'volume-down'
  | 'volume-slash'
  | 'volume-up'
  | 'wallet'
  | 'warning-alt'
  | 'warning'
  | 'wheats'
  | 'xmark-square'
  | 'xmark';

type KamaIconProps = {
  icon: IconTypes;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

function KamaIcon({ icon, className = '', ...props }: KamaIconProps) {
  const [imageSource, setImageSource] = useState<string>();

  useEffect(() => {
    let displayIcon: IconTypes = icon;

    switch (icon) {
      case 'close':
        displayIcon = 'xmark';
        break;

      case 'chart':
        displayIcon = 'chart-column';
        break;

      case 'info':
        displayIcon = 'info-square';
        break;

      case 'download':
        displayIcon = 'arrow-down-to-square';
        break;

      case 'edit':
        displayIcon = 'pen';
        break;

      default:
        break;
    }

    import(`assets/images/icons/${displayIcon}.svg`)
      .then((content) => {
        setImageSource(content.default);
      })
      .catch(() => {
        console.log(`error on loading the ${displayIcon} icon's image file`);
      });
  }, [icon]);

  const classList = classNames('KamaIcon', className);

  return (
    <div {...props} className={classList}>
      {imageSource ? <img src={imageSource} alt={icon} /> : null}
    </div>
  );
}

export default KamaIcon;
