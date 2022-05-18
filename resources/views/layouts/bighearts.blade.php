<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BIG HEARTS</title>

  <!-- Boostrap CSS -->
  <!-- <link rel="stylesheet" href="frontend/libraries/bootstrap/css/bootstrap.min.css" /> -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
    integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
    rel="stylesheet" />

  <!--  font awesome icons  -->
  <link rel="stylesheet" href="{{ asset('frontend/styles/all.min.css') }}" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <!-- Bootstrap Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
  <!-- Custom CSS -->
  <link rel="stylesheet" href="{{ asset('frontend/styles/main.css') }}" />
  <link rel="stylesheet" href="{{ asset('frontend/styles/style.css') }}" />

  <link rel="shortcut icon" href="{{ asset('frontend/image/favicon.png') }}" />
  <link rel="icon" type="image/x-icon" href="{{ asset('frontend/images/favicon.png') }}" />

  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
</head>

<body>
  @include('partials.navbar')
  @yield('content')
  @include('partials.footer')

  <script src="{{ asset('frontend/libraries/jquery/jquery-3.5.1.min.js') }}"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous">
  </script>
  {{-- <script src="frontend/libraries/bootstrap/js/bootstrap.bundle.js"></script> --}}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  {{-- <script src="frontend/scripts/vanilla-tilt.js"></script>
  <script src="frontend/libraries/progressbar/progressbar.js" charset="utf-8"></script>
  <script src="frontend/libraries/progressbar/progressbar.min.js" charset="utf-8"></script> --}}
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://unpkg.com/chart.js-plugin-labels-dv/dist/chartjs-plugin-labels.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="{{ asset('frontend/scripts/main.js') }}"></script>
</body>

</html>