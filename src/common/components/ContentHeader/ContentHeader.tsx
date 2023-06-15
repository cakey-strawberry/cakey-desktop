import Image from 'next/image';

import LogoCakeIcon from '@/common/assets/icons/logo-cake.svg';

import {
  HeaderWrapper,
  HeaderTitle,
  HeaderSubtitle,
} from './ContentHeader.styled';

type ContentHeaderProps = {
  title: string;
  subtitle: string;
};

function ContentHeader({ title, subtitle }: ContentHeaderProps) {
  return (
    <HeaderWrapper>
      <Image
        src={LogoCakeIcon}
        alt="content header icon"
        width={24}
        height={24}
      />
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>
    </HeaderWrapper>
  );
}

export default ContentHeader;
