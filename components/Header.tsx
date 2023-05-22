import React, { useEffect } from 'react'
import {
  Logo,
  LoginModal,
  LoginButton,
  WinningModal,
  AdminsControl,
  TicketsButton
} from "../components";
import { useAddress } from "@thirdweb-dev/react";
import { Flex, useDisclosure } from "@chakra-ui/react"

function Header() {
  const address = useAddress()
  const {
    isOpen: isOpenLoginModal,
    onOpen: onOpenLoginModal,
    onClose: onCloseLoginModal,
  } = useDisclosure();
  const {
    isOpen: isOpenWinningModal,
    onOpen: onOpenWinningModal,
    onClose: onCloseWinningModal,
  } = useDisclosure();


  useEffect(() => {
    if (address) { onClose() }
  }, [address])

  return (
    <Flex
      h={24}
      w="full"
      bg="blackAlpha.900"
      align="center"
      justify="space-between"
      px={[4, 8, 26, 32, 60, 60]}
      borderBottom="2px"
      borderColor="gray.900"
    >
      <Logo />
      <Flex>
        <AdminsControl />
        <TicketsButton onOpen={onOpenWinningModal} />
        <LoginButton address={address} onOpen={onOpenLoginModal} />
      </Flex>
      <LoginModal isOpen={isOpenLoginModal} onClose={onCloseLoginModal} />
      <WinningModal isOpen={isOpenWinningModal} onClose={onCloseWinningModal} />
    </Flex>
  );
}

export default Header