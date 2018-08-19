@extends('layouts._layouts')

@section('title')
    Zetin {{ $insight->title }}
    @stop
@section('content')
    <!-- main-container start -->
    <!-- ================ -->
    <section class="main-container">

        <div class="container">
            <div class="row">

                <!-- main start -->
                <!-- ================ -->
                <div class="main col-md-12">

                    <!-- page-title start -->
                    <!-- ================ -->
                    <h1 class="page-title margin-top-clear">{{ $insight->title }}</h1>
                    <!-- page-title end -->
                    <div class="row">
                        <div class="col-md-12">
                            <h3 style="color: #0E7FE7;">{{ $insight->category }}</h3>
                            <p style="color:rgba(200,200,200,1.00);">{{ $insight->updated_at->format('Y.m.d') }}</p>
                            <div class="separator-2"></div>
                            {!! str_replace('<p><br></p>', '<br />', $insight->content) !!}
                        </div>
                    </div>
                    <hr>
                </div>
                <!-- main end -->
            </div>
        </div>
    </section>
    <!-- main-container end -->

    <!-- section start -->
    <!-- ================ -->
    <div class="section clearfix">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>您可能想了解</h2>
                    <div class="separator-2"></div>
                    <div class="owl-carousel carousel">
                        @foreach($recommends as $recommend)
                        <div class="image-box object-non-visible" data-animation-effect="fadeInLeft" data-effect-delay="{{ $loop->remaining * 100 }}" style="padding:0 20px;">
                            <h3><a href="{{ route('insight.show', [$recommend->id]) }}">{{ $recommend->title }}</a></h3>
                            <a href="#">{{ $recommend->category }}</a>
                            <p>{{ mb_substr(strip_tags($recommend->content), 0, 120, 'utf-8') }}...</p>
                            <p style="color:rgba(200,200,200,1.00);">{{ $insight->updated_at->format('Y.m.d') }}</p>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- section end -->
    @stop