
CREATE TABLE [dbo].[CitiesTB](
	[CityID] [int] IDENTITY(1,1) NOT NULL,
	[CityName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_CitiesTB] PRIMARY KEY CLUSTERED 
(
	[CityID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[OrdersTB]    Script Date: 07/06/2017 12:54:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrdersTB](
	[OrderNumber] [int] NOT NULL,
	[OrderDate] [date] NOT NULL,
	[OrderTime] [datetime] NOT NULL,
	[SpaID] [int] NOT NULL,
	[IsAccepted] [bit] NOT NULL,
	[RateID] [int] NOT NULL,
	[UsersID] [int] NOT NULL,
	[TipulID] [int] IDENTITY(1,1) NOT NULL,
	[MetupalID] [int] NOT NULL,
	[MetapelID] [int] NOT NULL,
 CONSTRAINT [PK_OrdersTB] PRIMARY KEY CLUSTERED 
(
	[OrderNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[RatesTB]    Script Date: 07/06/2017 12:54:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RatesTB](
	[RateID] [int] IDENTITY(1,1) NOT NULL,
	[RateType] [int] NOT NULL,
	[RateDate] [date] NOT NULL CONSTRAINT [DF_RatesTB_RateDate]  DEFAULT (getdate()),
	[CommentType] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_RatesTB] PRIMARY KEY CLUSTERED 
(
	[RateID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SpaNameTB]    Script Date: 07/06/2017 12:54:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SpaNameTB](
	[SpaID] [int] IDENTITY(1,1) NOT NULL,
	[SpaName] [nvarchar](50) NOT NULL,
	[SpaDescriptin] [nvarchar](max) NOT NULL,
	[SpaDistance1] [int] NOT NULL,
	[CityID] [int] NOT NULL,
	[SpaDistance2] [int] NOT NULL,
 CONSTRAINT [PK_SpaNameTB] PRIMARY KEY CLUSTERED 
(
	[SpaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TipulinManager]    Script Date: 07/06/2017 12:54:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipulinManager](
	[SpaID] [int] NOT NULL,
	[TipulID] [int] NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TipulsTB]    Script Date: 07/06/2017 12:54:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipulsTB](
	[TipulID] [int] NOT NULL,
	[TipulTypeName] [nvarchar](50) NOT NULL,
	[TipulDescription] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_TipulsTB] PRIMARY KEY CLUSTERED 
(
	[TipulID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tyuy]    Script Date: 07/06/2017 12:54:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tyuy](
	[Name] [nchar](10) NULL,
	[Family] [nchar](10) NULL,
	[Pass] [int] NULL,
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[isAdmin] [bit] NULL,
 CONSTRAINT [PK_tyuy] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UsersTB]    Script Date: 07/06/2017 12:54:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsersTB](
	[Name] [nvarchar](50) NOT NULL,
	[Family] [nvarchar](50) NULL,
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[UserTZ] [int] NULL,
	[UserPhone] [int] NULL,
	[UserEmail] [nvarchar](50) NULL,
	[Pass] [int] NOT NULL,
	[UserBirthDate] [int] NULL,
	[UserGender] [int] NULL,
	[UserStatus] [int] NULL,
 CONSTRAINT [PK_UsersTB] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserTypeTB]    Script Date: 07/06/2017 12:54:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserTypeTB](
	[UserStatus] [int] NOT NULL,
	[UserTypeName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_UserTypeTB] PRIMARY KEY CLUSTERED 
(
	[UserStatus] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[RatesTB] ON 

INSERT [dbo].[RatesTB] ([RateID], [RateType], [RateDate], [CommentType]) VALUES (2, 4, CAST(N'2017-04-26' AS Date), N'god')
SET IDENTITY_INSERT [dbo].[RatesTB] OFF
SET IDENTITY_INSERT [dbo].[tyuy] ON 

INSERT [dbo].[tyuy] ([Name], [Family], [Pass], [ID], [isAdmin]) VALUES (N'y         ', N's         ', 1, 1, 1)
INSERT [dbo].[tyuy] ([Name], [Family], [Pass], [ID], [isAdmin]) VALUES (N'טשרןמ     ', N'ג         ', 4, 2, 0)
SET IDENTITY_INSERT [dbo].[tyuy] OFF
SET IDENTITY_INSERT [dbo].[UsersTB] ON 

INSERT [dbo].[UsersTB] ([Name], [Family], [UserID], [UserTZ], [UserPhone], [UserEmail], [Pass], [UserBirthDate], [UserGender], [UserStatus]) VALUES (N'y', NULL, 1, NULL, NULL, NULL, 1, NULL, NULL, 1)
INSERT [dbo].[UsersTB] ([Name], [Family], [UserID], [UserTZ], [UserPhone], [UserEmail], [Pass], [UserBirthDate], [UserGender], [UserStatus]) VALUES (N'a', NULL, 2, NULL, NULL, NULL, 2, NULL, NULL, 2)
SET IDENTITY_INSERT [dbo].[UsersTB] OFF
INSERT [dbo].[UserTypeTB] ([UserStatus], [UserTypeName]) VALUES (1, N'metapel')
INSERT [dbo].[UserTypeTB] ([UserStatus], [UserTypeName]) VALUES (2, N'metupal')
INSERT [dbo].[UserTypeTB] ([UserStatus], [UserTypeName]) VALUES (3, N'admin')
ALTER TABLE [dbo].[OrdersTB]  WITH CHECK ADD  CONSTRAINT [FK_OrdersTB_RatesTB] FOREIGN KEY([RateID])
REFERENCES [dbo].[RatesTB] ([RateID])
GO
ALTER TABLE [dbo].[OrdersTB] CHECK CONSTRAINT [FK_OrdersTB_RatesTB]
GO
ALTER TABLE [dbo].[OrdersTB]  WITH CHECK ADD  CONSTRAINT [FK_OrdersTB_SpaNameTB] FOREIGN KEY([SpaID])
REFERENCES [dbo].[SpaNameTB] ([SpaID])
GO
ALTER TABLE [dbo].[OrdersTB] CHECK CONSTRAINT [FK_OrdersTB_SpaNameTB]
GO
ALTER TABLE [dbo].[SpaNameTB]  WITH CHECK ADD  CONSTRAINT [FK_SpaNameTB_CitiesTB1] FOREIGN KEY([CityID])
REFERENCES [dbo].[CitiesTB] ([CityID])
GO
ALTER TABLE [dbo].[SpaNameTB] CHECK CONSTRAINT [FK_SpaNameTB_CitiesTB1]
GO
ALTER TABLE [dbo].[TipulinManager]  WITH CHECK ADD  CONSTRAINT [FK_TipulinManager_TipulsTB] FOREIGN KEY([TipulID])
REFERENCES [dbo].[TipulsTB] ([TipulID])
GO
ALTER TABLE [dbo].[TipulinManager] CHECK CONSTRAINT [FK_TipulinManager_TipulsTB]
GO
ALTER TABLE [dbo].[UsersTB]  WITH CHECK ADD  CONSTRAINT [FK_UsersTB_UserTypeTB1] FOREIGN KEY([UserStatus])
REFERENCES [dbo].[UserTypeTB] ([UserStatus])
GO
ALTER TABLE [dbo].[UsersTB] CHECK CONSTRAINT [FK_UsersTB_UserTypeTB1]
GO
USE [master]
GO
ALTER DATABASE [AlternativeDB] SET  READ_WRITE 
GO
