<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitUserStatus
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'OCA\\UserStatus\\' => 15,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'OCA\\UserStatus\\' => 
        array (
            0 => __DIR__ . '/..' . '/../lib',
        ),
    );

    public static $classMap = array (
        'OCA\\UserStatus\\AppInfo\\Application' => __DIR__ . '/..' . '/../lib/AppInfo/Application.php',
        'OCA\\UserStatus\\BackgroundJob\\ClearOldStatusesBackgroundJob' => __DIR__ . '/..' . '/../lib/BackgroundJob/ClearOldStatusesBackgroundJob.php',
        'OCA\\UserStatus\\Capabilities' => __DIR__ . '/..' . '/../lib/Capabilities.php',
        'OCA\\UserStatus\\Connector\\UserStatus' => __DIR__ . '/..' . '/../lib/Connector/UserStatus.php',
        'OCA\\UserStatus\\Connector\\UserStatusProvider' => __DIR__ . '/..' . '/../lib/Connector/UserStatusProvider.php',
        'OCA\\UserStatus\\Controller\\HeartbeatController' => __DIR__ . '/..' . '/../lib/Controller/HeartbeatController.php',
        'OCA\\UserStatus\\Controller\\PredefinedStatusController' => __DIR__ . '/..' . '/../lib/Controller/PredefinedStatusController.php',
        'OCA\\UserStatus\\Controller\\StatusesController' => __DIR__ . '/..' . '/../lib/Controller/StatusesController.php',
        'OCA\\UserStatus\\Controller\\UserStatusController' => __DIR__ . '/..' . '/../lib/Controller/UserStatusController.php',
        'OCA\\UserStatus\\Dashboard\\UserStatusWidget' => __DIR__ . '/..' . '/../lib/Dashboard/UserStatusWidget.php',
        'OCA\\UserStatus\\Db\\UserStatus' => __DIR__ . '/..' . '/../lib/Db/UserStatus.php',
        'OCA\\UserStatus\\Db\\UserStatusMapper' => __DIR__ . '/..' . '/../lib/Db/UserStatusMapper.php',
        'OCA\\UserStatus\\Exception\\InvalidClearAtException' => __DIR__ . '/..' . '/../lib/Exception/InvalidClearAtException.php',
        'OCA\\UserStatus\\Exception\\InvalidMessageIdException' => __DIR__ . '/..' . '/../lib/Exception/InvalidMessageIdException.php',
        'OCA\\UserStatus\\Exception\\InvalidStatusIconException' => __DIR__ . '/..' . '/../lib/Exception/InvalidStatusIconException.php',
        'OCA\\UserStatus\\Exception\\InvalidStatusTypeException' => __DIR__ . '/..' . '/../lib/Exception/InvalidStatusTypeException.php',
        'OCA\\UserStatus\\Exception\\StatusMessageTooLongException' => __DIR__ . '/..' . '/../lib/Exception/StatusMessageTooLongException.php',
        'OCA\\UserStatus\\Listener\\BeforeTemplateRenderedListener' => __DIR__ . '/..' . '/../lib/Listener/BeforeTemplateRenderedListener.php',
        'OCA\\UserStatus\\Listener\\UserDeletedListener' => __DIR__ . '/..' . '/../lib/Listener/UserDeletedListener.php',
        'OCA\\UserStatus\\Listener\\UserLiveStatusListener' => __DIR__ . '/..' . '/../lib/Listener/UserLiveStatusListener.php',
        'OCA\\UserStatus\\Migration\\Version0001Date20200602134824' => __DIR__ . '/..' . '/../lib/Migration/Version0001Date20200602134824.php',
        'OCA\\UserStatus\\Migration\\Version0002Date20200902144824' => __DIR__ . '/..' . '/../lib/Migration/Version0002Date20200902144824.php',
        'OCA\\UserStatus\\Service\\EmojiService' => __DIR__ . '/..' . '/../lib/Service/EmojiService.php',
        'OCA\\UserStatus\\Service\\JSDataService' => __DIR__ . '/..' . '/../lib/Service/JSDataService.php',
        'OCA\\UserStatus\\Service\\PredefinedStatusService' => __DIR__ . '/..' . '/../lib/Service/PredefinedStatusService.php',
        'OCA\\UserStatus\\Service\\StatusService' => __DIR__ . '/..' . '/../lib/Service/StatusService.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitUserStatus::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitUserStatus::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitUserStatus::$classMap;

        }, null, ClassLoader::class);
    }
}
