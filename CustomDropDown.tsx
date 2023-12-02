import {Text, Box, Center, ChevronDownIcon, Icon, Input, InputField, Pressable, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, ArrowUpIcon, ArrowDownIcon, HStack, Popover, PopoverBackdrop, PopoverContent, PopoverHeader, Heading, PopoverCloseButton, CloseIcon, PopoverBody, Button, ButtonText, VStack } from "@gluestack-ui/themed";
import { useRef, useState } from "react";
import { countries } from "./countries_list";
import ListComponents from "./ListComponents";

export default function CustomDrowDown() {
    const[search, setSearch] = useState('')
    const[clicked, setClicked] = useState(false)
    const[data, setData] = useState(countries)
    const[selectedCountry, setSelectedCountry] = useState('')
    const searchRef = useRef()
    const [isOpen, setIsOpen] = useState(false)
    const onSearch = (search: string) => {
      if (search !== '') {
        let tempData = data.filter(item => {
          return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
        setData(tempData);
      } else {
        setData(countries);
      }
    };
    const handleOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <VStack alignItems="center" pt="$20">
             <Box>
            <Popover
                isOpen={isOpen}
                onClose={handleClose}
                onOpen={handleOpen}
                placement="bottom"
                size="md"
                trigger={(triggerProps) => {
                return (
                    <Pressable  {...triggerProps} >
                        <HStack borderWidth="$2" p="$2" borderRadius="$md" alignItems="center">
                            <Text  mr="$8">
                                {selectedCountry == '' ? 'Select Country' : selectedCountry}
                            </Text>
                            {clicked ? (
                                <Icon as={ArrowUpIcon}/>
                            ) : (
                                <Icon as={ArrowDownIcon}/>
                            )}
                        </HStack>
                    </Pressable>
                )
                }}
                >
                <PopoverBackdrop />
                <PopoverContent>
                <PopoverHeader>
                    <Input w="92%" variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
                        <InputField placeholder='Search'/>
                    </Input>
                    <PopoverCloseButton>
                        <Icon as={CloseIcon} />
                    </PopoverCloseButton>
                </PopoverHeader>
                <PopoverBody>
                    <ListComponents/>
                </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
        </VStack>
       

       
        
        
    )
}