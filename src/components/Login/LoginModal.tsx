'use client';

import { useRouter } from 'next/navigation';

import { AppleButton, KakaoButton } from './LoginButton';
import { Popup } from '@/components/Modal';
import { KAKAO_AUTHORIZE } from '@/constants/env';

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const router = useRouter();
  const handleLogin = () => {
    router.replace(KAKAO_AUTHORIZE);
  };

  return (
    <Popup
      title="간편 로그인"
      content={`로그인하면 북마크도 쓸 수 있어요!\n간편 로그인으로 3초만에 가입해요.`}
      onClose={onClose}
    >
      <div className="flex w-full flex-col gap-8 pb-16">
        <KakaoButton onClick={handleLogin} />
        <AppleButton onClick={() => alert('앱스토어 준비중입니다.')} />
      </div>
    </Popup>
  );
}
