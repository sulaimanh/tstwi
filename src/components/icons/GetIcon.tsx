import React, { FC } from 'react'
import * as Icons from './allIcons'
import { IconLookupProps } from './IconLookup'

export const GetIcon: FC<IconLookupProps> = ({
  name,
  size,
  stroke,
  className,
  onClick,
  fill = 'fill-black',
}) => {
  switch (name) {
    case 'add-outline':
      return (
        <Icons.AddOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'add-solid':
      return (
        <Icons.AddSolid
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'adjust':
      return (
        <Icons.Adjust
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'airplane':
      return (
        <Icons.Airplane
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'album':
      return (
        <Icons.Album
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'align-center':
      return (
        <Icons.AlignCenter
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'align-justified':
      return (
        <Icons.AlignJustified
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'align-left':
      return (
        <Icons.AlignLeft
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'align-right':
      return (
        <Icons.AlignRight
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'anchor':
      return (
        <Icons.Anchor
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'announcement':
      return (
        <Icons.Announcement
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'apparel':
      return (
        <Icons.Apparel
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-down':
      return (
        <Icons.ArrowDown
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-left':
      return (
        <Icons.ArrowLeft
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-outline-down':
      return (
        <Icons.ArrowOutlineDown
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-outline-left':
      return (
        <Icons.ArrowOutlineLeft
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-outline-right':
      return (
        <Icons.ArrowOutlineRight
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-outline-up':
      return (
        <Icons.ArrowOutlineUp
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-right':
      return (
        <Icons.ArrowRight
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-thick-down':
      return (
        <Icons.ArrowThickDown
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-thick-left':
      return (
        <Icons.ArrowThickLeft
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-thick-right':
      return (
        <Icons.ArrowThickRight
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-thick-up':
      return (
        <Icons.ArrowThickUp
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-thin-down':
      return (
        <Icons.ArrowThinDown
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-thin-left':
      return (
        <Icons.ArrowThinLeft
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-thin-right':
      return (
        <Icons.ArrowThinRight
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-thin-up':
      return (
        <Icons.ArrowThinUp
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'arrow-up':
      return (
        <Icons.ArrowUp
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'artist':
      return (
        <Icons.Artist
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'at-symbol':
      return (
        <Icons.AtSymbol
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'attachment':
      return (
        <Icons.Attachment
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'backspace':
      return (
        <Icons.Backspace
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'backward-step':
      return (
        <Icons.BackwardStep
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'backward':
      return (
        <Icons.Backward
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'badge':
      return (
        <Icons.Badge
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'battery-full':
      return (
        <Icons.BatteryFull
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'battery-half':
      return (
        <Icons.BatteryHalf
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'battery-low':
      return (
        <Icons.BatteryLow
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'beverage':
      return (
        <Icons.Beverage
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'block':
      return (
        <Icons.Block
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'bluetooth':
      return (
        <Icons.Bluetooth
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'bolt':
      return (
        <Icons.Bolt
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'book-reference':
      return (
        <Icons.BookReference
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'bookmark-copy-2':
      return (
        <Icons.BookmarkCopy2
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'bookmark-copy-3':
      return (
        <Icons.BookmarkCopy3
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'bookmark-outline-add':
      return (
        <Icons.BookmarkOutlineAdd
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'bookmark-outline':
      return (
        <Icons.BookmarkOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'bookmark':
      return (
        <Icons.Bookmark
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'border-all':
      return (
        <Icons.BorderAll
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'border-bottom':
      return (
        <Icons.BorderBottom
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'border-horizontal':
      return (
        <Icons.BorderHorizontal
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'border-inner':
      return (
        <Icons.BorderInner
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'border-left':
      return (
        <Icons.BorderLeft
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'border-none':
      return (
        <Icons.BorderNone
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'border-outer':
      return (
        <Icons.BorderOuter
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'border-right':
      return (
        <Icons.BorderRight
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'border-top':
      return (
        <Icons.BorderTop
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'border-vertical':
      return (
        <Icons.BorderVertical
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'box':
      return (
        <Icons.Box
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'brightness-down':
      return (
        <Icons.BrightnessDown
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'brightness-up':
      return (
        <Icons.BrightnessUp
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'browser-window-new':
      return (
        <Icons.BrowserWindowNew
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'browser-window-open':
      return (
        <Icons.BrowserWindowOpen
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'browser-window':
      return (
        <Icons.BrowserWindow
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'bug':
      return (
        <Icons.Bug
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'buoy':
      return (
        <Icons.Buoy
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'calculator':
      return (
        <Icons.Calculator
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'calendar':
      return (
        <Icons.Calendar
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'camera':
      return (
        <Icons.Camera
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'chart-bar':
      return (
        <Icons.ChartBar
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'chart-pie':
      return (
        <Icons.ChartPie
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'chart':
      return (
        <Icons.Chart
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'chat-bubble-dots':
      return (
        <Icons.ChatBubbleDots
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'checkmark-outline':
      return (
        <Icons.CheckmarkOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'checkmark':
      return (
        <Icons.Checkmark
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'cheveron-down':
      return (
        <Icons.CheveronDown
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'cheveron-left':
      return (
        <Icons.CheveronLeft
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'cheveron-outline-down':
      return (
        <Icons.CheveronOutlineDown
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'cheveron-outline-left':
      return (
        <Icons.CheveronOutlineLeft
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'cheveron-outline-right':
      return (
        <Icons.CheveronOutlineRight
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'cheveron-outline-up':
      return (
        <Icons.CheveronOutlineUp
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'cheveron-right':
      return (
        <Icons.CheveronRight
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'cheveron-up':
      return (
        <Icons.CheveronUp
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'clipboard':
      return (
        <Icons.Clipboard
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'close-outline':
      return (
        <Icons.CloseOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'close-solid':
      return (
        <Icons.CloseSolid
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'close':
      return (
        <Icons.Close
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'cloud-upload':
      return (
        <Icons.CloudUpload
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'cloud':
      return (
        <Icons.Cloud
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'code':
      return (
        <Icons.Code
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'coffee':
      return (
        <Icons.Coffee
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'cog':
      return (
        <Icons.Cog
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'color-palette':
      return (
        <Icons.ColorPalette
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'compose':
      return (
        <Icons.Compose
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'computer-desktop':
      return (
        <Icons.ComputerDesktop
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'computer-laptop':
      return (
        <Icons.ComputerLaptop
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'conversation':
      return (
        <Icons.Conversation
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'copy':
      return (
        <Icons.Copy
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'credit-card':
      return (
        <Icons.CreditCard
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'currency-dollar':
      return (
        <Icons.CurrencyDollar
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'dashboard':
      return (
        <Icons.Dashboard
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'date-add':
      return (
        <Icons.DateAdd
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'dial-pad':
      return (
        <Icons.DialPad
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'directions':
      return (
        <Icons.Directions
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'document-add':
      return (
        <Icons.DocumentAdd
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'document':
      return (
        <Icons.Document
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'dots-horizontal-double':
      return (
        <Icons.DotsHorizontalDouble
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'dots-horizontal-triple':
      return (
        <Icons.DotsHorizontalTriple
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'download':
      return (
        <Icons.Download
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'duplicate':
      return (
        <Icons.Duplicate
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'edit-copy':
      return (
        <Icons.EditCopy
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'edit-crop':
      return (
        <Icons.EditCrop
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'edit-cut':
      return (
        <Icons.EditCut
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'edit-pencil':
      return (
        <Icons.EditPencil
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'education':
      return (
        <Icons.Education
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'envelope':
      return (
        <Icons.Envelope
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'exclamation-outline':
      return (
        <Icons.ExclamationOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'exclamation-solid':
      return (
        <Icons.ExclamationSolid
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'explore':
      return (
        <Icons.Explore
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'factory':
      return (
        <Icons.Factory
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'fast-forward':
      return (
        <Icons.FastForward
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'fast-rewind':
      return (
        <Icons.FastRewind
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'film':
      return (
        <Icons.Film
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'filter':
      return (
        <Icons.Filter
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'flag':
      return (
        <Icons.Flag
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'flashlight':
      return (
        <Icons.Flashlight
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'folder-outline-add':
      return (
        <Icons.FolderOutlineAdd
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'folder-outline':
      return (
        <Icons.FolderOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'folder':
      return (
        <Icons.Folder
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'format-bold':
      return (
        <Icons.FormatBold
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'format-font-size':
      return (
        <Icons.FormatFontSize
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'format-italic':
      return (
        <Icons.FormatItalic
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'format-text-size':
      return (
        <Icons.FormatTextSize
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'format-underline':
      return (
        <Icons.FormatUnderline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'forward-step':
      return (
        <Icons.ForwardStep
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'forward':
      return (
        <Icons.Forward
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'gift':
      return (
        <Icons.Gift
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'globe':
      return (
        <Icons.Globe
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'hand-stop':
      return (
        <Icons.HandStop
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'hard-drive':
      return (
        <Icons.HardDrive
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'headphones':
      return (
        <Icons.Headphones
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'heart':
      return (
        <Icons.Heart
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'home':
      return (
        <Icons.Home
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'hot':
      return (
        <Icons.Hot
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'hour-glass':
      return (
        <Icons.HourGlass
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'inbox-check':
      return (
        <Icons.InboxCheck
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'inbox-download':
      return (
        <Icons.InboxDownload
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'inbox-full':
      return (
        <Icons.InboxFull
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'inbox':
      return (
        <Icons.Inbox
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'indent-decrease':
      return (
        <Icons.IndentDecrease
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'indent-increase':
      return (
        <Icons.IndentIncrease
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'information-outline':
      return (
        <Icons.InformationOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'information-solid':
      return (
        <Icons.InformationSolid
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'key':
      return (
        <Icons.Key
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'keyboard':
      return (
        <Icons.Keyboard
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'layers':
      return (
        <Icons.Layers
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'library':
      return (
        <Icons.Library
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'light-bulb':
      return (
        <Icons.LightBulb
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'link':
      return (
        <Icons.Link
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'list-add':
      return (
        <Icons.ListAdd
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'list-bullet':
      return (
        <Icons.ListBullet
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'list':
      return (
        <Icons.List
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'load-balancer':
      return (
        <Icons.LoadBalancer
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'location-current':
      return (
        <Icons.LocationCurrent
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'location-food':
      return (
        <Icons.LocationFood
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'location-gas-station':
      return (
        <Icons.LocationGasStation
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'location-hotel':
      return (
        <Icons.LocationHotel
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'location-marina':
      return (
        <Icons.LocationMarina
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'location-park':
      return (
        <Icons.LocationPark
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'location-restroom':
      return (
        <Icons.LocationRestroom
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'location-shopping':
      return (
        <Icons.LocationShopping
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'location':
      return (
        <Icons.Location
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'lock-closed':
      return (
        <Icons.LockClosed
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'lock-open':
      return (
        <Icons.LockOpen
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'map':
      return (
        <Icons.Map
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'menu':
      return (
        <Icons.Menu
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'mic':
      return (
        <Icons.Mic
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'minus-outline':
      return (
        <Icons.MinusOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'minus-solid':
      return (
        <Icons.MinusSolid
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'mobile-devices':
      return (
        <Icons.MobileDevices
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'mood-happy-outline':
      return (
        <Icons.MoodHappyOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'mood-happy-solid':
      return (
        <Icons.MoodHappySolid
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'mood-neutral-outline':
      return (
        <Icons.MoodNeutralOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'mood-neutral-solid':
      return (
        <Icons.MoodNeutralSolid
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'mood-sad-outline':
      return (
        <Icons.MoodSadOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'mood-sad-solid':
      return (
        <Icons.MoodSadSolid
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'mouse':
      return (
        <Icons.Mouse
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'music-album':
      return (
        <Icons.MusicAlbum
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'music-artist':
      return (
        <Icons.MusicArtist
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'music-notes':
      return (
        <Icons.MusicNotes
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'music-playlist':
      return (
        <Icons.MusicPlaylist
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'navigation-more':
      return (
        <Icons.NavigationMore
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'network':
      return (
        <Icons.Network
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'news-paper':
      return (
        <Icons.NewsPaper
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'notification':
      return (
        <Icons.Notification
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'notifications-outline':
      return (
        <Icons.NotificationsOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'notifications':
      return (
        <Icons.Notifications
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'paste':
      return (
        <Icons.Paste
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'pause-outline':
      return (
        <Icons.PauseOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'pause-solid':
      return (
        <Icons.PauseSolid
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'pause':
      return (
        <Icons.Pause
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'pen-tool':
      return (
        <Icons.PenTool
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'phone':
      return (
        <Icons.Phone
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'photo':
      return (
        <Icons.Photo
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'php-elephant':
      return (
        <Icons.PhpElephant
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'pin':
      return (
        <Icons.Pin
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'play-outline':
      return (
        <Icons.PlayOutline
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'play':
      return (
        <Icons.Play
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'playlist':
      return (
        <Icons.Playlist
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'plugin':
      return (
        <Icons.Plugin
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'portfolio':
      return (
        <Icons.Portfolio
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'printer':
      return (
        <Icons.Printer
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'pylon':
      return (
        <Icons.Pylon
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'question':
      return (
        <Icons.Question
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'queue':
      return (
        <Icons.Queue
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'radar-copy-2':
      return (
        <Icons.RadarCopy2
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'radar':
      return (
        <Icons.Radar
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'radio':
      return (
        <Icons.Radio
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'refresh':
      return (
        <Icons.Refresh
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'reload':
      return (
        <Icons.Reload
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'reply-all':
      return (
        <Icons.ReplyAll
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'reply':
      return (
        <Icons.Reply
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'repost':
      return (
        <Icons.Repost
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'save-disk':
      return (
        <Icons.SaveDisk
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'screen-full':
      return (
        <Icons.ScreenFull
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'search':
      return (
        <Icons.Search
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'send':
      return (
        <Icons.Send
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'servers':
      return (
        <Icons.Servers
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'share-01':
      return (
        <Icons.Share01
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'share-alt':
      return (
        <Icons.ShareAlt
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'share':
      return (
        <Icons.Share
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'shield':
      return (
        <Icons.Shield
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'shopping-cart':
      return (
        <Icons.ShoppingCart
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'show-sidebar':
      return (
        <Icons.ShowSidebar
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'shuffle':
      return (
        <Icons.Shuffle
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'stand-by':
      return (
        <Icons.StandBy
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'star-full':
      return (
        <Icons.StarFull
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'station':
      return (
        <Icons.Station
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'step-backward':
      return (
        <Icons.StepBackward
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'step-forward':
      return (
        <Icons.StepForward
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'stethoscope':
      return (
        <Icons.Stethoscope
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'store-front':
      return (
        <Icons.StoreFront
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'stroke-width':
      return (
        <Icons.StrokeWidth
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'subdirectory-left':
      return (
        <Icons.SubdirectoryLeft
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'subdirectory-right':
      return (
        <Icons.SubdirectoryRight
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'swap':
      return (
        <Icons.Swap
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'tablet':
      return (
        <Icons.Tablet
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'tag':
      return (
        <Icons.Tag
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'target':
      return (
        <Icons.Target
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'text-box':
      return (
        <Icons.TextBox
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'text-decoration':
      return (
        <Icons.TextDecoration
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'thermometer':
      return (
        <Icons.Thermometer
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'thumbs-down':
      return (
        <Icons.ThumbsDown
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'thumbs-up':
      return (
        <Icons.ThumbsUp
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'ticket':
      return (
        <Icons.Ticket
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'time':
      return (
        <Icons.Time
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'timer':
      return (
        <Icons.Timer
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'tools-copy':
      return (
        <Icons.ToolsCopy
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'translate':
      return (
        <Icons.Translate
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'trash':
      return (
        <Icons.Trash
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'travel-bus':
      return (
        <Icons.TravelBus
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'travel-car':
      return (
        <Icons.TravelCar
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'travel-case':
      return (
        <Icons.TravelCase
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'travel-taxi-cab':
      return (
        <Icons.TravelTaxiCab
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'travel-train':
      return (
        <Icons.TravelTrain
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'travel-walk':
      return (
        <Icons.TravelWalk
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'travel':
      return (
        <Icons.Travel
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'trophy':
      return (
        <Icons.Trophy
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'tuning':
      return (
        <Icons.Tuning
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'upload':
      return (
        <Icons.Upload
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'usb':
      return (
        <Icons.Usb
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'user-add':
      return (
        <Icons.UserAdd
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'user-group':
      return (
        <Icons.UserGroup
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'user-solid-circle':
      return (
        <Icons.UserSolidCircle
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'user-solid-square':
      return (
        <Icons.UserSolidSquare
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'user':
      return (
        <Icons.User
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'vector':
      return (
        <Icons.Vector
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'video-camera':
      return (
        <Icons.VideoCamera
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'view-carousel':
      return (
        <Icons.ViewCarousel
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'view-column':
      return (
        <Icons.ViewColumn
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'view-hide':
      return (
        <Icons.ViewHide
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'view-list':
      return (
        <Icons.ViewList
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'view-show':
      return (
        <Icons.ViewShow
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'view-tile':
      return (
        <Icons.ViewTile
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'volume-down':
      return (
        <Icons.VolumeDown
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'volume-mute':
      return (
        <Icons.VolumeMute
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'volume-off':
      return (
        <Icons.VolumeOff
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'volume-up':
      return (
        <Icons.VolumeUp
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'wallet':
      return (
        <Icons.Wallet
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'watch':
      return (
        <Icons.Watch
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'window-new':
      return (
        <Icons.WindowNew
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'window-open':
      return (
        <Icons.WindowOpen
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'window':
      return (
        <Icons.Window
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'wrench':
      return (
        <Icons.Wrench
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'yin-yang':
      return (
        <Icons.YinYang
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'zoom-in':
      return (
        <Icons.ZoomIn
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    case 'zoom-out':
      return (
        <Icons.ZoomOut
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      )
    default:
      throw new Error('Noop')
  }
}
